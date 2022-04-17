const projects = [
	{
		id: 0,
		title: 'Number Counter',
		description:
			'A React App in which you can add and subtract numbers, either by 1, or a custom amount. In this project I wanted to practice not only using Hooks (useState) and Handlers to handle the quantity, addition, and subtraction, but also taking a value from the input field and being able to update the state. I implemented an if check to not allow the number to go below zero.',
		tech: 'React, Reactstrap, Github',
		url: 'https://mlabreche9.github.io/Counter/',
		code: 'https://github.com/MLabreche9/Counter',
		image: './Counter_img.png'
	},
	{
		id: 1,
		title: 'Track Expenses',
		description:
			'A project built through the Udemy Course - React The Complete Guide. A React App in which you can add an item, the amount, and the date. The expense is then added to a list which can be sorted by year. This was a practice in rendering lists of data and adding dynamic styles',
		tech: 'React, CSS',
		url: 'https://mlabreche9.github.io/trackExpenses/',
		code: 'https://github.com/MLabreche9/trackExpenses',
		image: './Expense_img.png'
	},
	{
		id: 2,
		title: 'Food Order',
		description:
			'A project built through the Udemy Course - React The Complete Guide. A React App in which you can add food items to a cart. Within the cart you can add or subtract items, and see your subtotal. A key take away for me on this project was using and creating Context for state management and understanding how data is accessed and passed.',
		tech: 'React, CSS, Context API',
		url: 'https://mlabreche9.github.io/foodOrderCart/',
		code: 'https://github.com/MLabreche9/foodOrderCart',
		image: './Food_img.png'
	}
];

export default projects;
