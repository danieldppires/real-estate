import Chat from "../components/Chat";
import List from "../components/List";

const Profile = () => {
	return (
		<div className="flex h-full mt-8 sm:mt-0 text-sm">
			<div className="flex-3 overflow-y-auto pb-12 [&::-webkit-scrollbar]:hidden">
				<div className="pr-12 flex flex-col gap-12">
					<div className="flex items-center justify-between">
						<h2 className="font-light text-3xl">User Information</h2>
						<button className="py-3 px-8 cursor-pointer bg-amber-300 hover:bg-amber-400">
							Update Profile
						</button>
					</div>

					<div className="flex flex-col gap-5">
						<span className="flex items-center gap-5">
							Avatar:
							<img
								src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt=""
								className="w-10 h-10 rounded-full object-cover"
							/>
						</span>

						<span className="flex items-center gap-5">
							Username: <b>John Doe</b>
						</span>

						<span className="flex items-center gap-5">
							E-mail: <b>john@gmail.com</b>
						</span>
					</div>

					<div className="flex items-center justify-between">
						<h2 className="font-light text-3xl">My List</h2>
						<button className="py-3 px-8 cursor-pointer bg-amber-300 hover:bg-amber-400">
							Create New Post
						</button>
					</div>

					<List />

					<div className="flex items-center justify-between">
						<h2 className="font-light text-3xl">Saved List</h2>
					</div>

					<List />
				</div>
			</div>

			<div className="flex-2 h-full bg-stone-100">
				<div className="px-5 h-full">
					<Chat />
				</div>
			</div>
		</div>
	);
};

export default Profile;
