import { useState } from "react";

const Chat = () => {
	const [chat, setChat] = useState<null | boolean>(true);
	return (
		<div className="h-full flex flex-col">
			<div className="flex-1 flex flex-col gap-5 overflow-y-auto [&::-webkit-scrollbar]:hidden">
				<h2 className="font-light text-3xl">Messages</h2>

				<div className="bg-white py-2 px-5 rounded-lg flex items-center gap-5 cursor-pointer hover:bg-amber-50">
					<img
						src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-bold">John Doe</span>
					Lorem ipsum dolor sit amet...
				</div>

				<div className="bg-white py-2 px-5 rounded-lg flex items-center gap-5 cursor-pointer hover:bg-amber-50">
					<img
						src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-bold">John Doe</span>
					Lorem ipsum dolor sit amet...
				</div>

				<div className="bg-white py-2 px-5 rounded-lg flex items-center gap-5 cursor-pointer hover:bg-amber-50">
					<img
						src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-bold">John Doe</span>
					Lorem ipsum dolor sit amet...
				</div>

				<div className="bg-white py-2 px-5 rounded-lg flex items-center gap-5 cursor-pointer hover:bg-amber-50">
					<img
						src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-bold">John Doe</span>
					Lorem ipsum dolor sit amet...
				</div>

				<div className="bg-white py-2 px-5 rounded-lg flex items-center gap-5 cursor-pointer hover:bg-amber-50">
					<img
						src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-bold">John Doe</span>
					Lorem ipsum dolor sit amet...
				</div>

				<div className="bg-white py-2 px-5 rounded-lg flex items-center gap-5 cursor-pointer hover:bg-amber-50">
					<img
						src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-bold">John Doe</span>
					Lorem ipsum dolor sit amet...
				</div>
			</div>

			{chat && (
				<div className="flex-1 bg-white flex flex-col justify-between shadow-lg">
					<div className="bg-amber-200 p-5 font-bold flex items-center justify-between">
						<div className="flex items-center gap-5">
							<img
								src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt=""
								className="w-7.5 h-7.5 rounded-full object-cover"
							/>
							John Doe
						</div>

						<span className="cursor-pointer" onClick={() => setChat(null)}>
							x
						</span>
					</div>

					<div className="max-h-[200px] overflow-y-auto [&::-webkit-scrollbar]:hidden p-5 flex flex-col gap-5">
						<div className="w-1/2">
							<p>Lorem ipsum dolor sit amet</p>
							<span className="text-xs bg-amber-100 py-0.5 px-1 rounded-sm text-stone-500">
								1 hour ago
							</span>
						</div>

						<div className="w-1/2 self-end text-right">
							<p>Lorem ipsum dolor sit amet</p>
							<span className="text-xs bg-amber-100 p-0.5 rounded-sm text-stone-500">
								1 hour ago
							</span>
						</div>

						<div className="w-1/2">
							<p>Lorem ipsum dolor sit amet</p>
							<span className="text-xs bg-amber-100 py-0.5 px-1 rounded-sm text-stone-500">
								1 hour ago
							</span>
						</div>

						<div className="w-1/2 self-end text-right">
							<p>Lorem ipsum dolor sit amet</p>
							<span className="text-xs bg-amber-100 p-0.5 rounded-sm text-stone-500">
								1 hour ago
							</span>
						</div>

						<div className="w-1/2">
							<p>Lorem ipsum dolor sit amet</p>
							<span className="text-xs bg-amber-100 py-0.5 px-1 rounded-sm text-stone-500">
								1 hour ago
							</span>
						</div>

						<div className="w-1/2 self-end text-right">
							<p>Lorem ipsum dolor sit amet</p>
							<span className="text-xs bg-amber-100 p-0.5 rounded-sm text-stone-500">
								1 hour ago
							</span>
						</div>
					</div>

					<div className="border-t border-t-amber-300 h-15 flex items-center justify-between">
						<textarea className="flex-3 h-full p-5"></textarea>
						<button className="flex-1 bg-amber-200 h-full cursor-pointer">
							Send
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Chat;
