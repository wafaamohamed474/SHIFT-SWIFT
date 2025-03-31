import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";
import logOutIcon from "../../assets/Log_Out.png"

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out of your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logout(); // Call logout function to remove auth token
                Swal.fire("Logged Out", "You have been successfully logged out.", "success");
                navigate("/"); // Redirect to home after logout
            }
        });
    };

    return (
        <button 
            onClick={handleLogout} 
            className="w-full flex justify-start items-center my-3 p-2 rounded-md text-main-text hover:bg-light-hover"
        >
            <img src={logOutIcon} alt="Logout" className="w-5 h-5 mr-3" />
            Sign Out
        </button>
    );
};

export default LogoutButton;
