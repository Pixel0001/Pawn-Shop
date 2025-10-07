import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Succes() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="flex items-center justify-center mb-4 gap-2">
                <CheckCircleIcon className="!text-green-600" fontSize="large"/>
                <h1 className="text-3xl font-bold text-green-600">Success!</h1>
            </div>
            <p className="text-gray-700 mb-2">Your Tranzaction was completed successfully.</p>
            <p className="text-gray-700 mb-6">Your Order has been placed!</p>
            <Link
            to="/shop"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
            Go to Shop
            </Link>
        </div>
        </div>
    );
}