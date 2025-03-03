import { useState } from "react";
import toast from "react-hot-toast";

export default function PersonInfo() {
    const [name, setName] = useState("Trần Văn Tuấn");
    const [email, setEmail] = useState("nguyenvana@example.com");
    const [phone, setPhone] = useState("0123456789");

    const handleSave = () => {
        toast("Thông tin đã được lưu!");
    };

    return (
        <div className="p-4 bg-white rounded-lg max-w-md mx-auto">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <h2 className="text-lg font-semibold text-center">Thông tin cá nhân</h2>
            </div>

            <div className="space-y-3">
                <div>
                    <label className="block text-sm font-medium">Họ và tên</label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="w-full border rounded-lg p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Số điện thoại</label>
                    <input
                        type="tel"
                        className="w-full border rounded-lg p-2"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <button
                    className="w-full bg-blue-500 text-white p-2 rounded-lg mt-3"
                    onClick={handleSave}
                >
                    Lưu thông tin
                </button>
            </div>
        </div>
    );
}
