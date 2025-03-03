import { useState } from "react";
import toast from "react-hot-toast";

export default function PersonInfo() {
    const [name, setName] = useState<string>("Trần Văn Tuấn");
    const [email, setEmail] = useState<string>("nguyenvana@example.com");
    const [phone, setPhone] = useState<string>("0123456789");

    const handleSave = (): void => {
        toast.success("Thông tin đã được lưu!");
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white-100 p-4">
            <div className="bg-white p-6 w-full max-w-md">
                <h2 className="text-lg font-semibold text-center mb-4">Thông tin cá nhân</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                        <input
                            type="tel"
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                            value={phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                        />
                    </div>

                    <button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
                        onClick={handleSave}
                    >
                        Lưu thông tin
                    </button>
                </div>
            </div>
        </div>
    );
}
