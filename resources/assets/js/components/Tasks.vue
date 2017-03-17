<template>
  <div>
    please <router-link to="/login">Login.</router-link>

    <div>
      <strong>Hello, Kazuya!</strong>
      <p>Your tasks here.</p>

      <ul>
        <li>
          Learn Vue.js
        </li>
        <button class="btn btn-sm btn-success">Done</button>

        <button class="btn btn-sm btn-danger">Remove</button>
      </ul>

      <div class="form-group">
        <div class="alert alert-danger" role="alert">
           Task name should not be blank.
        </div>
        <input type="text" class="form-control" placeholder="new task...">
        <button class="btn btn-primary">
          Add task
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import http from '../services/http'

  export default {
    mounted() {
      this.fetchTasks()
    },
    components: {
      PulseLoader
    },
    data() {
      return {
        tasks: [],
        name: '',
        show_alert: false,
        alert_message: '',
      }
    },
    methods: {
      fetchTasks () {
        // TODO: not to send request when the user is not authenticated
        http.get('tasks', res => {
          this.tasks = res.data
        })
      },
      addTask () {
        if (this.name === '') {
          this.show_alert = true
          this.alert_message = 'Task name should not be blank.'
          return false
        }
        http.post('tasks', {name: this.name}, res => {
          this.tasks[res.data.id] = res.data
          this.name = ''
          this.show_alert = false
          this.alert_message = ''
        })
      },
      completeTask (task) {
        http.put('tasks/' + task.id, {is_done: !task.is_done}, res => {
          this.tasks[task.id] = res.data
          this.$forceUpdate()
        })
      },
      removeTask (task) {
        http.delete('tasks/' + task.id, {}, () => {
          delete this.tasks[task.id]
          this.$forceUpdate()
        })
      },
    }
  }
</script>
