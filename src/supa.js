//Home page
try{
	const { data: summary, error: summaryError } = await supabase.schema('courses').from('summary').select('*').gte('likes', 100).order('likes', { ascending: false }).limit(10);
	if (summaryError) console.log('Error fetching data:', summaryError);
	const { data: extensions, error: extensionError } = await supabase.schema('tools').from('extension_summary').select('*').gte('likes', 100).order('likes', { ascending: false }).limit(10);
	if (extensionError) console.log('Error fetching data:', error);
	const { data: category_progress, error: progressError } = await supabase.schema('api').from('category_progress').select('*');
	if (progressError) console.log('Error fetching data:', progressError);
	return { courses: summary, extensions: extensions, progress: category_progress };
}catch(error){
	console.log(error);
} 

//Sign Up
try{	
	let { data: user, error: userError } = await supabase.auth.signUp({
			email: email,
			password: password,
			phone: phone
	})
	if(userError) return userError;
	let { data: profile, error: profileError } = await supabase.schema('api').from('profiles').insert([{ userId: user.id }, { email: email } { name: firstName + ' ' + lastName }, { residence: residence }, { date_of_birth: birthday }, ]);
	if(profileError) return profileError;
	const res = redirect('/');
	res.body = true;
	return res;
}catch(err){
	return err;
}

//Sign In
try{
	let { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
	});
	const res = redirect('/');
	res.body = true;
	return res;
}catch(err){
	return err;
}

//requireAuth
supabase.auth.onAuthStateChange((_, session) => {
	if (session && session.user) {
		console.log(session.user);
	}else{
		const res = redirect("/auth?message=Sign In or Sign Up first");
		res.body = true;
		throw res;
	}
});

//Courses
try{
	const { data: summary, error: summaryError } = await supabase.schema('courses').from('summary').select('*');
	if (summaryError) console.log('Error fetching data:', summaryError);
	return summary;
}catch(error){
	console.log(error);
}

//SFC
try{
	const { data: summary, error: summaryError } = await supabase.schema('courses').from('summary').select('*').eq('type', 'sfc');
	if (summaryError) console.log('Error fetching data:', summaryError);
	return summary;
}catch(error){
	console.log(error);
}

//Account
try{
	const { data: user, error: userError } = await supabase.getUser();
	let { data: profile, error: profileError } = await supabase.schema('api').from('profiles').select('*').eq('user_id', user.id);
	return profile;
}catch(error){
	console.log(error);
}

//Tools and Extension
try{
	const { data: extensions, error: extensionError } = await supabase.schema('api').from('extensions').select('*');
	return extensions;
}catch(error){
	console.log(error);
}

//Blog
try{
	const { data: user, error: userError } = await supabase.getUser();
	let { data: profileImg, error: profileImgError } = await supabase.schema('api').from('profiles').select('profileImg').eq('user_id', user.id);
	const { data: blog, error: blogError } = await supabase.schema('').from('').select('*');
	return { blog: blog, profileImg: profileImg };
}catch(error){
	console.log(error);
}

//Wallet
try{
	const { data: user, error: userError } = await supabase.getUser();
	const { data: wallet, error: walletError } = await supabase.schema('api').from('wallet').select('*').eq('user_id', user.id);
}catch{
	console.log(error);
}

let { data: user_profiles, error } = await supabase
	.from('user_profiles')
	.select(`
		some_column,
		other_table (
			foreign_key
		)
	`)


let { data: user_profiles, error } = await supabase
  .from('user_profiles')
  .select('*')
  .range(0, 9)


let { data: user_profiles, error } = await supabase
  .from('user_profiles')
  .select("*")
  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')
  // Arrays
  .contains('array_column', ['array', 'contains'])
  .containedBy('array_column', ['contained', 'by'])


const userProfiles = supabase.channel('custom-all-channel')
  .on(
	'postgres_changes',
	{ event: '*', schema: 'public', table: 'user_profiles' },
	(payload) => {
	  console.log('Change received!', payload)
	}
  )
  .subscribe()


const userProfiles = supabase.channel('custom-filter-channel')
  .on(
	'postgres_changes',
	{ event: '*', schema: 'public', table: 'user_profiles', filter: 'column_name=eq.someValue' },
	(payload) => {
	  console.log('Change received!', payload)
	}
  )
  .subscribe()

  const SERVICE_KEY = 'SUPABASE_SERVICE_KEY'


let { data, error } = await supabase.auth.signUp({
  email: 'someone@email.com',
  password: 'MRbyMVaRSUZOzWcmWPIs'
})


let { data, error } = await supabase.auth.signInWithOtp({
  email: 'someone@email.com'
})


let { data, error } = await supabase.auth.signUp({
  phone: '+13334445555',
  password: 'some-password'
})



let { data, error } = await supabase.auth.signInWithOtp({
  phone: '+13334445555'
})


let { data, error } = await supabase.auth.verifyOtp({
  phone: '+13334445555',
  token: '123456',
  type: 'sms'
})


let { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github'
})


let { data, error } = await supabase.auth.resetPasswordForEmail(email)


const { data, error } = await supabase.auth.updateUser({
  email: "new@email.com",
  password: "new-password",
  data: { hello: 'world' }
})


let { error } = await supabase.auth.signOut()


let { data, error } = await supabase.auth.admin.inviteUserByEmail('someone@email.com')

const { data, error } = await supabase
  .from('posts') // Table name
  .select('*')    // Select all columns
  .gte('likes', 100) // Filter: likes >= 100
  .order('likes', { ascending: false }) // Order by likes in descending order
  .limit(10); // Optional: Limit to 10 results

if (error) {
  console.error('Error fetching data:', error);
} else {
  console.log('Filtered posts:', data);
}

//View incrementation
const incrementViews = async () => {
	try {
		const { data: views, error: viewError } = await supabase.rpc('increment_views', { row_id: });
		if(viewError) console.log(viewError);
	}catch(err){
		console.log(err);
	}
}
//sql
create or replace function increment_views (row_id uuid)
return void as 
$$
	update courses.summary
	set views = views + 1
	where row_id = id;
$$
language sql volatile;

//Like incrementation
const incrementLikes = async () => {
	try {
		const { data: likes, error: likeError } = await supabase.rpc('increment_likes', { row_id: });
		if(likeError) console.log(likeError);
	}catch(err){
		console.log(err);
	}
}
//sql
create or replace function increment_likes (row_id uuid)
return void as 
$$
	update courses.summary
	set likes = likes + 1
	where row_id = id;
$$
language sql volatile;

//Download incrementation
const incrementDownloads = async () => {
	try {
		const { data: downloads, error: downloadError } = await supabase.rpc('increment_downloads', { row_id: });
		if(downloadError) console.log(downloadError);
	}catch(err){
		console.log(err);
	}
}
//sql
create or replace function increment_downloads (row_id uuid)
return void as 
$$
	update courses.summary
	set downloads = downloads + 1
	where row_id = id;
$$
language sql volatile;

