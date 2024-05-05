import React, { useState, useRef, useEffect } from "react";

function Messenger() {
	const [messages, setMessages] = useState([]);
	const [messageInput, setMessageInput] = useState("");
	const chatAreaRef = useRef(null);

	const handleInputChange = (e) => {
		setMessageInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (messageInput.trim() !== "") {
			// Add the new message to the messages array
			setMessages([...messages, { text: messageInput }]);
			// Clear the message input field
			setMessageInput("");
		}
	};

	useEffect(() => {
		// Scroll to the bottom of the chat area whenever messages change
		chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
	}, [messages]);

	return (
		<>
			<div className="w-full h-screen bg-slate-600">
				{/* Header */}

				{/* Main Content */}
				<div className="h-full flex flex-col">
					{/* Chat Area */}
					<div
						ref={chatAreaRef}
						className="flex-grow bg-slate-400 p-4 overflow-y-auto"
					>
						{messages.map((message, index) => (
							<div key={index} className="mb-2  ">
								{message.text}
							</div>
						))}
					</div>

					{/* Message Input */}
					<form onSubmit={handleSubmit} className="p-4 flex">
						<input
							type="text"
							value={messageInput}
							onChange={handleInputChange}
							placeholder="Type a message..."
							className="flex-grow h-12 px-4 bg-white border border-gray-300 rounded-md outline-none mr-2"
						/>
						<button
							type="submit"
							className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Messenger;
