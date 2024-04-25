import { /*React,*/ useState /*useEffect*/ } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import instance from '../hooks/API.js';

export default function ReadmeGen() {
	const [readme, setReadme] = useState({
		github: '',
		email: '',
		title: '',
		description: '',
		installation: '',
		usage: '',
		license: '',
		contributing: '',
		tests: '',
		screenshotLinks: [],
		deployedLink: '',
		technologies: [{ name: '', color: '' }],
	});

	function toggleModal() {
		document.getElementById('modal').classList.toggle('hidden');
	}

	function handleChange(e) {
		console.log(e.target.value);
		setReadme({ ...readme, [e.target.name]: e.target.value });
	}
	const createReadme = async () => {
		const response = await instance.post('/api/readme', readme);
		console.log(response.data);
	};
	return (
		<div className='w-fit mx-auto'>
			<div className='flex flex-row justify-end'>
				<h1 className='text-xl font-bold text-blue-light text-center my-5 grow justify-self-center'>
					Readme Generator
				</h1>
				<button
					className='bg-blue-light rounded-full px-2 mx-5 w-fit shadow-md shadow-cyan-500/50 text-center h-fit self-center'
					onClick={toggleModal}
				>
					Create Readme
				</button>
			</div>
			<div
				className='fixed z-10 overflow-y-auto top-0 w-full left-0 hidden'
				id='modal'
			>
				<div className='flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center  sm:block sm:p-0'>
					<div className='fixed inset-0 transition-opacity'>
						<div className='absolute inset-0 bg-gray-900 opacity-75' />
					</div>
					<span className='hidden sm:inline-block sm:align-middle sm:h-screen'>
						&#8203;
					</span>
					<div
						className='inline-block align-center bg-slate-600 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
						role='dialog'
						aria-modal='true'
						aria-labelledby='modal-headline'
					>
						<div className='bg-slate-600 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
							<h3 className='text-xl font-bold text-blue-light text-center my-5 grow justify-self-center'>
								Add Task
							</h3>
                            <label className='font-medium text-blue-light'>Github Username</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='github'
								onChange={handleChange}
							/>
                            <label className='font-medium text-blue-light'>Contact Email</label>
							<input
								type='email'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='email'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>Title</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='title'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>Description</label>
							<textarea
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='description'
								onChange={handleChange}
							/>
                            <label className='font-medium text-blue-light'>Install Command</label>
                            <input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='installation'
								onChange={handleChange}
							/>
                            <label className='font-medium text-blue-light'>Information about using this repo</label>
                            <textarea
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='usage'
								onChange={handleChange}
							/>
                            <label className='font-medium text-blue-light'>License</label>
                            <input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='installation'
								onChange={handleChange}
							/>
						</div>
						<div className='bg-slate-600 px-4 py-3 text-right border-t-4 border-purple-c '>
							<button
								type='button'
								className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2'
								onClick={toggleModal}
							>
								<i className='fas fa-times'></i> Cancel
							</button>
							<button
								type='button'
								className='py-2 px-4 bg-purple-c text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500'
								onClick={createReadme}
							>
								<i className='fas fa-plus'></i> Create
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
