<template lang="pug">
  section#todoapp.section
    .container
      h1.title ToDo List
      .control
        label.radio(v-for="label in options")
          input(type='radio' v-model='current' :value='label.value')
          | {{ label.label }}
      | ({{ computedTodos.length }} 件を表示中) 
      table.table
        thead
          tr
            th.id_tb ID
            th.comment_tb コメント
            th.state_tb 状態
            th.button_tb -
        tbody
          tr(v-for='item in computedTodos' :key='item.id' :class="{done:item.state}")
            th {{ item.id }}
            td {{ item.comment }}
            td.state_tb
              button(@click='doChangeState(item)')
                | {{ labels[item.state] }}
            td.button_tb
              button(@click="doRemove(item)")
                | 削除
      h2.subtitle 新しい作業の追加
      form.add-form.field(@submit.prevent='doAdd')
        span コメント
        input.input(type='text' ref='comment')
        button.button.is-primary.is-rounded(type='submit') 追加
</template>

<script>
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
export default {
  data: function() {
    return {
      todos: [],
      options: [
        { value: -1, label: 'All'},
        { value: 0, label: 'Working'},
        { value: 1, label: 'Done'}
      ],
      current: -1
    };
  },
  methods: {
    doAdd: function(event,value) {
      var comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    },
    doChangeState: function(item) {
      item.state = item.state ? 0 : 1
    },
    doRemove: function(item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },
  created() {
    this.todos = todoStorage.fetch()
  },
  computed: {
    computedTodos: function() {
      return this.todos.filter(function(el){
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels() {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    }
  }
}
</script>

<style lang="stylus">
#todoapp
  .container
    width 100%
    .table
      width 100%
      border-collapse collapse
      thead
        tr
          th
            color #00d1b2
            border-bottom 2px solid #00d1b2
            text-align center
            &.id_tb
              width 50px
              text-align left
            &.state_tb
              width 100px
            &.button_tb
              width: 100px;
      tbody
        tr
          td
            &.button_tb,&.state_tb
              text-align center
.table
  thead,tbody
    tr
      th
        padding 0 8px
        line-height 40px
      th,td
        border-bottom 1px solid #ccc
        transition all 0.4s
      &.done th,&.done td
        background #f8f8f8
        color #bbb
      &:hover th,&:hover td
        background #f4fbff
button
  border none
  border-radius 20px
  line-height 24px
  padding 0 8px
  background #00d1b2
  color #fff
  cursor pointer
.add-form
  display flex
  justify-content flex-start
  align-items center
  input 
    max-width 200px
    margin 0 5px
</style>
