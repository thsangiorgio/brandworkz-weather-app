import React, { FC } from "react";

interface AlertProps {
	message: string;
	onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
	return (
		<div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
			<div className="modal-background" onClick={onClose}></div>
			<div className="modal-card">
				<header className="modal-card-head has-background-danger">
					<p className="modal-card-title has-text-white">{message}</p>
				</header>
				<footer className="modal-card-foot" style={{ justifyContent: "center" }}>
					<button className="text-sm" onClick={onClose}>
						Close
					</button>
				</footer>
			</div>
		</div>
	);
};

export default Alert;
