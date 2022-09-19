import { useRouter } from "next/router"

export default function PostID() {
    const router = useRouter();
    const { pid } = router.query;
    return (
        <>
            <h1>PID: {pid}</h1>
        </>
    )
}