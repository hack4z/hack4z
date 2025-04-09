import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { supabase } from "./supabase";

export async function requireAuth(){
	supabase.auth.onAuthStateChange((_, session) => {
		if (session && session.user) {
			console.log('hello');
		}else{
			return redirect("/auth?message=Sign In or Sign Up first");
		}
	});
	const extraInfo = Cookies.get('profile') && JSON.parse(Cookies.get('profile'));
	if(extraInfo){
		const { data: profile, error: profileError } = await supabase.from('user_profiles').insert([ 
			{user_id: extraInfo.user_id, 
			name: extraInfo.name, 
			residence: extraInfo.residence,
			birthday: extraInfo.birthday}, 
		]).select();
		if(profileError) console.log(profileError);
		Cookies.remove('profile');
	}
}

export async function loginUser(email, password){
	try{
		let { data: user, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		});
		if(error) return error;
		const res = redirect('/');
		res.body = true;
		return res;
	}catch(err){
		return err;
	}
}


export async function createUser(firstName, lastName, email, phone, password, residence, birthday){
	//Supabase manages its own user table ( read-only )
	try{	
		//Supabase User table
		const { data: user, error: userError } = await supabase.auth.signUp({
			email: email,
			password: password,
			phone: phone
		})
		if(userError) return userError;
		Cookies.set('profile', JSON.stringify({
			user_id: user.user.id, 
			name: firstName + ' ' + lastName, 
			residence: residence,
			birthday: birthday
		}))
		return user;
	}catch(err){
		return err;
	}
}

export async function getUser(){
	try{
		let { data: profile, error: profileError } = await supabase.schema('api').from('profiles').select('*').eq('user_id', Cookies.get('user'));
		if(profileError) console.log(profileError);
		return profile;
	}catch(err){
		console.log(err);
	}
}

export async function getCourses(){
	try{
		const { data: summary, error: summaryError } = await supabase.schema('courses').from('summary').select('*');
		if (summaryError) console.log(summaryError);
		console.log(summary);
		return {courses: summary};
	}catch(err){
		console.log(err);
	}
}

export async function getCourse(name){
	try{
		const { data: summary, error: summaryError } = await supabase.schema('courses').from('summary').select(name);
		if (summaryError) console.log(summaryError);
		return summary;
	}catch(err){
		console.log(err);
	}
}

export async function getModule(module_){
	const res = await fetch(`/api/modules/${module_}`);
	const data = await res.json();
	return data;
}

export async function getSfcs(){
	const res = await fetch('/api/sfcs');
	const data = await res.json();
	return data;
}

export async function getBlogs(){
	const res = await fetch('/api/blogs');
	const data = await res.json();
	return data;
}

export async function getGeneralProgress(){
	try{
		let { data: progress, error: progressError } = await supabase.from('progress').select('*');
		if (progressError) console.log(progressError);
		return progress;
	}catch(err){
		console.log(err);
	}
}