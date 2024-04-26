import { /*React,*/ useState /*useEffect*/ } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import instance from '../hooks/API.js';

export default function ReadmeGen() {
	const [readme, setReadme] = useState({
		readmeLink: '',
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
	});
	function toggleModal() {
		document.getElementById('modal').classList.toggle('hidden');
	}

	function handleChange(e) {
		let name = e.target.name;
		let value = e.target.value;

		setReadme({ ...readme, [name]: value });
	}
	const createReadme = async () => {
		const response = await instance.post('/api/readme', readme);
		console.log(response.data);
	};

	// const downloadFile = async () => {
	// 	try {
	// 		const response = await instance.get('/generatedReadMe.md', {
	// 			responseType: 'blob',
	// 		});
	// 		const url = window.URL.createObjectURL(new Blob([response.data]));
	// 		const link = document.createElement('a');
	// 		link.href = url;
	// 		link.setAttribute('download', 'README.md');
	// 		document.body.appendChild(link);
	// 		link.click();
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

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
				{/* <button
					className='bg-blue-light rounded-full px-2 mx-5 w-fit shadow-md shadow-cyan-500/50 text-center h-fit self-center'
					onClick={downloadFile}
				>
					Download Generated Readme
				</button> */}
			</div>
			<div
				className='fixed z-10 overflow-y-auto top-0 w-full left-0 hidden'
				id='modal'
			>
				<div className='flex items-center justify-center min-height-100vh h-screen pt-4 px-4 pb-20 text-center  sm:block sm:p-0'>
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
						<div className='bg-slate-600 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 '>
							<h3 className='text-xl font-bold text-blue-light text-center my-5 grow justify-self-center'>
								Create ReadMe
							</h3>
							<label className='font-medium text-blue-light'>
								Path for file to be created/edited (include the file name with
								the path)
							</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='readmeLink'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>
								Github Username
							</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='github'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>
								Contact Email
							</label>
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
							<label className='font-medium text-blue-light'>Description (You are able to put in Markdown code to stylize the description)</label>
							<textarea
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='description'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>
								Install Command
							</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='installation'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>
								Information about using this repo
							</label>
							<textarea
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='usage'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>License</label>
							<select
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='license'
								onChange={handleChange}
							>
								<option value='MIT'>MIT</option>
								<option value='APACHE 2.0'>Apache 2.0</option>
								<option value='GPL 3.0'>GPL 3.0</option>
								<option value='BSD 3'>BSD 3</option>
								<option value='None'>None</option>
							</select>
							<label className='font-medium text-blue-light'>
								How others can contribute
							</label>
							<textarea
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='contributing'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>
								How to run tests
							</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='tests'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>
								Screenshot Links
							</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='screenshotLinks'
								onChange={handleChange}
							/>
							<label className='font-medium text-blue-light'>
								Deployed Link
							</label>
							<input
								type='text'
								className='w-full outline-none rounded bg-slate-300 p-2 mt-2 mb-3'
								name='deployedLink'
								onChange={handleChange}
							/>
						</div>
						<div className='bg-slate-600 px-4 py-3 text-right border-t-4 border-purple-c mt-5'>
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
