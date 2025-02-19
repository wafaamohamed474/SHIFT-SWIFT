import { useState } from "react";
import Button from "../../../components/button/Button";
const DeleteAccountSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="mt-4 pb-6">
      <label className="font-semibold text-2xl text-main-color">
        Delete Account
      </label>
      <div className="mt-4 w-full">
        <p className="text-dark-text">
          If you need to delete an account and you're prompted to provide a
          reason
        </p>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="deleteCheckbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-4 h-4 focus:outline-none"
          />
          <label htmlFor="deleteCheckbox" className="text-dark-text text-sm">
            Yes, I want to delete my account
          </label>
        </div>

        <div className="w-full mt-3">
          <Button
            type="button"
            variant="primary"
            label="Delete Account"
            className={`${
              isChecked ? `opacity-100` : `opacity-55`
            } bg-red-700 !w-1/3 py-2`}
            disabled={!isChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountSection;
