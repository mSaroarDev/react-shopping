import React from "react";
import { Link } from "react-router-dom";

const LoginMsg = () => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">You are not Logged in!</h3>
          <p className="py-4">You have to login to Buy Products. Login now!</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default LoginMsg;
