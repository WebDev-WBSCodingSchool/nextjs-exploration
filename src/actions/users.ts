'use server';

type RegisterState = {
	error: string | null;
	success: boolean;
	message?: string;
	user?: {
		username: string;
		email: string;
	};
};

export async function registerUser(
	prevState: RegisterState,
	formData: FormData
): Promise<RegisterState> {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
	const username = formData.get('username') as string;
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;
	if (!username || !email || !password) {
		return {
			error: 'All fields are required.',
			success: false
		};
	}
	console.log('User registered:', { username, email, password });
	console.log('Here you could safely store the user data in a database.');
	return {
		success: true,
		message: 'User registered successfully.',
		user: { username, email },
		error: null
	};
}
