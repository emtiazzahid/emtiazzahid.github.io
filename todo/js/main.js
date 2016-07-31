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