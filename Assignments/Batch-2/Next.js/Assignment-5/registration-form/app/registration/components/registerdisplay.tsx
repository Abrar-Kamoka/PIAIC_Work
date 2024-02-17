import { contactTypes } from "@/app/commontypes";

export default function DisplayForm(props: { contactData: contactTypes[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-400 border border-black">
                <thead>
                    <tr className="bg-yellow-950">
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contactData.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-yellow-700 text-center' : 'bg-yellow-800 text-center'}>
                            <td className="py-2 px-4 border-b ">{item.name}</td>
                            <td className="py-2 px-4 border-b ">{item.email}</td>
                            <td className="py-2 px-4 border-b ">{item.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};