import { createServer, 	Model, Response } from "miragejs";


const subscriptionDescription = {
	'free': [
		{key: "s1fk", text: "All courses are available", color: "amber", ext: "(access using 4z coins)"},
		{key: "s2fk", text: "Access IDE and Terminal", color: "green", ext: ""},
		{key: "s3fk", text: "Access to the AI Chatbot and its extensions", color: "amber", ext: "(access using credits)"},
		{key: "s4fk", text: "24/7 customer support", color: "green", ext: ""},
		{key: "s5fk", text: "Access to the Notes extension", color: "green", ext: "(based on Obsidian)"},
		{key: "s6fk", text: "Access to virtual servers", color: "red", ext: ""},
		{key: "s7fk", text: "Free 4Z coins renewal each month", color: "red", ext: ""},
		{key: "s8fk", text: "Free ext-credit renewal each month", color: "green", ext: "(120 ext-credits)"},
	],
	'pro': [
		{key: "s1pk", text: "All courses are available", color: "green", ext: ""},
		{key: "s2pk", text: "Access IDE and Terminal", color: "green", ext: ""},
		{key: "s3fk", text: "Access to the AI Chatbot and its extensions", color: "amber", ext: "(access using credits)"},
		{key: "s4pk", text: "24/7 customer support", color: "green", ext: ""},
		{key: "s5pk", text: "Access to the Notes extension", color: "green", ext: "(based on Obsidian)"},
		{key: "s6pk", text: "Access to virtual servers", color: "amber", ext: "(access using credits)"},
		{key: "s7pk", text: "Free 4Z coins renewal each month", color: "green", ext: "(100 coins)"},
		{key: "s8pk", text: "Free ext-credit renewal each month", color: "green", ext: "(270 ext-credits)"},
	]
}

createServer({
	models: {
		users: Model,
		navlinks: Model,
		courses: Model,
		modules: Model,
		subscriptions: Model,
		sfcs: Model,
		extensions: Model,
		tools: Model,
		progressbars: Model,
		totalprogressbars: Model,
		blogs: Model,
		notificationfilters: Model,
		notifications: Model
	},
	type: '', 
	seeds(server) {
		server.create("user", { id: "u1", userId: "u_123", img: '', firstName: 'Void', lastName: 'Perisher', username: 'VP4Z-01', email: "void@void.vom", phoneNumber: "0723456789", dateOfBirth: '12/19/2024', residence: 'Kenya', subscription: 'free', password: "p123vnm#", token: "1234r5678i90"});
		server.create("user", { id: "u2", userId: "u_124", img: '', firsttName: 'Rom', lastName: 'Trent', username: 'RT4Z-02', email: "rom@void.vom", phoneNumber: "0783475690", password: "frit7&&", dateOfBirth: '12/19/2024', residence: 'Kenya', subscription: 'free', token: ""});
		server.create("user", { id: "u3", userId: "u_125", img: '', firstName: 'Com', lastName: 'Cut', username: 'CC4Z-03', email: "com@void.vom", phoneNumber: "0710923455", password: "3rfver***", dateOfBirth: '12/19/2024', residence: 'Kenya', subscription: 'paid', token: ""});
		server.create("user", { id: "u4", userId: "u_126", img: '', firstName: 'Dom', lastName: 'Loir', username: 'DL4Z-04', email: "dom@void.vom", phoneNumber: "0766778899", password: "0p004rt#@!", dateOfBirth: '12/19/2024', residence: 'Kenya', subscription: 'paid', token: ""});
		server.create("navlink", {id: "n1", name: "Home", path: "/"});
		server.create("navlink", {id: "n2", name: "Courses", path: "/courses"});
		server.create("navlink", {id: "n3", name: "Store", path: "/store"});
		server.create("navlink", {id: "n4", name: "Subscription", path: "/subscription"});
		server.create("navlink", {id: "n5", name: "Blog", path: "/blog"});
		server.create("navlink", {id: "n7", name: "Tools & Assets", path: "/tools"});
		server.create("navlink", {id: "n8", name: "SFC", path: "/sfc"});
		server.create("navlink", {id: "n9", name: "Log Out", path: "/auth"});
		server.create("course", {id: '1', key: 'c1', path: 'tailwindcss', name: 'Tailwind CSS', isLiked: 'on', isBookmarked: 'off', views: 100000000, likes: 89000000, downloads: 10000, type: 'recommended', level: 'beginner', state: 'completed', img: 'css.jpeg', icon: 'css.jpeg', long_description: '', short_description: 'Tailwind CSS is a css utility framework based on inline class styling. Its widely popular due to its simplicity, effectiveness and accesibility accross several frameworks such as React or Vue. It uses a class based system meaning you input the styles in the class attribute on your element using the specific syntax.', category: 'sfc', requirements: [] });
		server.create("course",	{id: '2', key: 'c2', path: '', name: '', views: 500, isLiked: 'on', isBookmarked: 'off', likes: 56, downloads: 10000, level: 'beginner', state: 'completed', img: 'react-router.jpeg', icon: '', time: '30dys', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("course", {id: '3', key: 'c3', path: '', name: '', views: 106, isLiked: 'off', isBookmarked: 'on', likes: 98, downloads: 10000, level: 'advanced', state: 'notcompleted', img: '', icon: '', time: '12dys', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("course", {id: '4', key: 'c4', path: '', name: '', views: 59, isLiked: 'off', isBookmarked: 'off', likes: 57, downloads: 10000, level: 'beginner', state: 'completed', img: '', icon: '', time: '12 months', long_description: '', short_description: '', category: 'sfc', requirements: [] });
		server.create("course", {id: '5', key: 'c5', path: '', name: '', views: 1, isLiked: 'off', isBookmarked: 'on', likes: 0, downloads: 10000, level: 'advanced', state: 'notcompleted', img: '', icon: '', time: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("module", {id: '1', key: 'm1', path: 'colors', name: 'Colors', views: '100,000,000', likes: '89,000,000', downloads: '10,000', type: 'recommended', level: 'beginner', state: 'completed', img: ['css.jpeg', 'react-router.jpeg'], icon: 'css.jpeg', long_description: '', short_description: 'Tailwind CSS {logo} is a css utility framework based on inline class styling. Its widely popular due to its simplicity, effectiveness and accesibility accross several frameworks such as React or Vue. It uses a class based system meaning you input the styles in the class attribute on your element using the specific syntax. {block}', category: 'sfc', requirements: [] });
		server.create("blog", {id: '1', key: 'b1', name: 'Tailwind CSS', views: '100,000,000', likes: '89,000,000', downloads: '10,000', level: 'beginner', state: 'completed', img: 'css.jpeg', icon: 'css.jpeg', long_description: '', short_description: 'Tailwind CSS is a css utility framework based on inline class styling. Its widely popular due to its simplicity, effectiveness and accesibility accross several frameworks such as React or Vue. It uses a class based system meaning you input the styles in the class attribute on your element using the specific syntax on their site at ', category: 'sfc', requirements: [] });
		server.create("blog", {id: '2', key: 'b2', name: '', views: '500', likes: '56', downloads: '10,000', level: 'beginner', state: 'completed', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("blog", {id: '3', key: 'b3', name: '', views: '106', likes: '98', downloads: '10,000', level: 'advanced', state: 'notcompleted', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("blog", {id: '4', key: 'b4', name: '', views: '59', likes: '57', downloads: '10,000', level: 'beginner', state: 'completed', img: '', icon: '', long_description: '', short_description: '', category: 'sfc', requirements: [] });
		server.create("blog", {id: '5', key: 'b5', name: '', views: '1', likes: '0', downloads: '10,000', level: 'advanced', state: 'notcompleted', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("subscription", {id: 1, key: "s1", name: "Free", price: 0, description: subscriptionDescription.free});
		server.create("subscription", {id: 2, key: "s2", name: "Pro", price: 1290, description: subscriptionDescription.pro});
		server.create("sfc", {id: 's1', name: '', level: 'beginner', state: 'completed', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("sfc", {id: 's2', name: '', level: 'beginner', state: 'completed', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("sfc", {id: 's3', name: '', level: 'advanced', state: 'notcompleted', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("sfc", {id: 's4', name: '', level: 'beginner', state: 'completed', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("sfc", {id: 's5', name: '', level: 'advanced', state: 'notcompleted', img: '', icon: '', long_description: '', short_description: '', category: '', requirements: [] });
		server.create("progressbar", {id: '1', key: 'p1', val: 70, text:'70%', mode: 'on', name: 'Web Development', color: 'purple'});
		server.create("progressbar", {id: '2', key: 'p2', val: 45, text:'45%', mode: 'on', name: 'App Development', color: 'blue'});
		server.create("progressbar", {id: '3', key: 'p3', val: 89, text:'89%', mode: 'on', name: 'Cybersecurity & Pentesting', color: 'brown'});
		server.create("progressbar", {id: '4', key: 'p4', val: 50, text:'50%', mode: 'on', name: 'Programming Languages', color: '#22164f'});
		server.create("progressbar", {id: '5', key: 'p5', val: 65, text:'65%', mode: 'on', name: 'Data Science', color: 'green'});
		server.create("progressbar", {id: '6', key: 'p6', val: 78, text:'78%', mode: 'on', name: 'Game Development', color: '#854d0e'});
		server.create("progressbar", {id: '7', key: 'p7', val: 0, text:'Coming Soon', mode: "off", name: 'AI & Machine Learning', color: 'orange'});
		server.create("progressbar", {id: '8', key: 'p8', val: 0, text:'Coming Soon', mode: "off", name: 'Dev Ops', color: 'orange'});
		server.create("extension", {id: 1, img: 'css.jpeg', key: 'e1', isLiked: 'on', stars: [1, 1, 1, 1, 1], description: ''});
		server.create("extension", {id: 2, img: 'react-router.png', key: 'e2', isLiked: 'on', stars: [1, 1, 1, 1, 0], description: ''});
		server.create("extension", {id: 3, img: '', key: 'e3', isLiked: 'off', stars: [1, 1, 1, 0, 0], description: ''});
		server.create("extension", {id: 4, img: '', key: 'e4', isLiked: 'off', stars: [1, 1, 0, 0, 0], description: ''});
		server.create("extension", {id: 5, img: '', key: 'e5', isLiked: 'off', stars: [1, 0, 0, 0, 0], description: ''});
		server.create("tool", {key: 1, icon: '', x: '', y: '', children: []});
		server.create("totalprogressbar", {id: '1', key: 'cp1', val: 70, color: 'purple'});
		server.create("totalprogressbar", {id: '2', key: 'cp2', val: 45, color: 'blue'});
		server.create("totalprogressbar", {id: '3', key: 'cp3', val: 89, color: 'brown'});
		server.create("totalprogressbar", {id: '4', key: 'cp4', val: 50, color: '#22164f'});
		server.create("notificationfilter", {id: '1', name: 'Today', value: 'reccomended', type: 'since', styles: 'bg-blue-500/40 text-blue-700', activeStyles: 'ring-4 ring-blue-700/40'});
		server.create("notificationfilter", {id: '2', name: 'Yesterday', value: 'popular', type: 'since', styles: 'bg-red-500/40 text-red-700', activeStyles: 'ring-4 ring-red-700/40'});
		server.create("notificationfilter", {id: '3', name: 'Last Week', value: 'news', type: 'since', styles: 'bg-yellow-500/40 text-yellow-700', activeStyles: 'ring-4 ring-yellow-700/40'});
		server.create("notificationfilter", {id: '4', name: 'Last Month', value: 'tips', type: 'since', styles: 'bg-orange-500/40 text-orange-700', activeStyles: 'ring-4 ring-orange-700/40'});
		server.create("notificationfilter", {id: '5', name: 'Badges', value: 'badges', type: 'type', styles: 'bg-violet-500/40 text-violet-700', activeStyles: 'ring-4 ring-violet-700/40'});
		server.create("notificationfilter", {id: '6', name: 'Certificates', value: 'certificates', type: 'type', styles: 'bg-amber-500/40 text-amber-700', activeStyles: 'ring-4 ring-amber-700/40'});
		server.create("notification", {id: '1', name: 'Testing!!! 123', img: '', description: 'This is a test'});
		server.create("notification", {id: '2', name: 'Testing!!! 123', img: '', description: 'This is a test'});
	},

	routes() { 
		this.namespace = "api"
		this.logging = false
		//this.timing = 5000
		this.passthrough('https://generativelanguage.googleapis.com/**'); // Allow requests to the Google API

		this.get('/navlinks', (schema, request) => {
			return schema.navlinks.all();
		})

		this.get('/courses', (schema, request) => {
			return schema.courses.all();
		})

		this.get('/courses/:course', (schema, request) => {
			const course = request.params.course;
			return schema.courses.where({path: course});
		})

		this.get('/modules/:module', (schema, request) => {
			const module_ = request.params.module;
			return schema.modules.where({path: module_});
		})

		this.get('/subscriptions', (schema, request) => {
			return schema.subscriptions.all();
		})

		this.get('/sfcs', (schema, request) => {
			return schema.sfcs.all();
		})

		this.get('/extensions', (schema, request) => {
			return schema.extensions.all();
		})

		this.get('/tools', (schema, request) => {
			return schema.tools.all();
		})

		this.get('/progress', (schema, request) => {
			return schema.progressbars.all();
		})

		this.get('/totalprogress', (schema, request) => {
			return schema.totalprogressbars.all();
		})

		this.get('/blogs', (schema, request) => {
			return schema.blogs.all();
		})

		this.get('/notificationfilters', (schema, request) => {
			return schema.notificationfilters.all();
		})

		this.get('/notifications', (schema, request) => {
			return schema.notifications.all();
		})

		this.post('/user', (schema, request) => {
			const { userId,token } = JSON.parse(request.requestBody);
			const foundUser = schema.users.findBy({userId,token});
			if (!foundUser) {
				return new Response(401, {}, { message: "No user found with those credentials"})
			}
			foundUser.password = undefined
			return foundUser;
		})

		this.post('/auth', (schema, request) => {
			const { email,password } = JSON.parse(request.requestBody);
			const foundUser = schema.users.findBy({email,password});
			if (!foundUser) {
				return new Response(401, {}, { message: "No user found with those credentials"})
			}
			foundUser.password = undefined
			let token = '';
			for (var i = 0; i < 23; i++) {
				token += Math.floor(Math.random() * 9)
			}
			return foundUser;
		})
	}
})