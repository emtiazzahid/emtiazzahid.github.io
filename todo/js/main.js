var TodoComponent = Vue.extend({
	data: function(){
		return {
			inEditMode: false
		}
	}, 
	props: ['todo'],
	template: '<div><span v-on:click="clicked" v-show="!inEditMode">{{ todo.title }}</span><input v-on:keyup.enter="saved" v-model="todo.title" v-show="inEditMode" class="form-control"/></div>',
	methods : {
		clicked: function(){
		this.inEditMode = true;
		},
		saved: function(){
			this.inEditMode = false;
		}
	}

});

Vue.component('todo-component', TodoComponent);


new Vue({
	el: '#app',
	data: {
		message: 'hello',
		Text: '',
		todos: [],
		checked: true,
		count: 1
	},
	methods: {
		createTodo: function(){
			var todotext = this.Text.trim();
			if (todotext) {
				this.todos.push({title: todotext});
				this.Text = '';
			}

			
		},
		clearText: function(){
			this.Text = '';
		},
		addingX: function(){
			this.Text = this.Text + ' XXX ';
		},
		increaseCount: function(){
			this.count = this.count + 1;
		},
		removeTodo: function(index){
			this.todos.splice(index,1);
		}
	}
})