import { useRouter } from "next/router";

export default function CategoryID() {
    const router = useRouter();
    const { pid, categoryID } = router.query;
    return (
        <div>
            <p>PID: {pid}</p>
            <p>Cate ID: {categoryID}</p>
        </div>
    )
}