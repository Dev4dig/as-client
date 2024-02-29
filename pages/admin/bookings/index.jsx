import BookingItem from "@/components/BookingItem/BookingItem";
import AdminLayout from "@/components/admin-layout/admin-layout";

const Bookings = ({ bookings }) => {
    return (
        <AdminLayout>
            <div className="border-full">
                <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
                {/* Render list of bookings using BookingItem component */}
                {bookings.map(booking => (
                    <BookingItem key={booking.id} booking={booking} />
                ))}
            </div>
        </AdminLayout>
    );
};

export async function getServerSideProps() {
    // Fetch bookings from your server API
    const response = await fetch("http://localhost:10003/bookings");
    const bookings = await response.json();

    return {
        props: {
            bookings,
        },
    };
}

export default Bookings;
