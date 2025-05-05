"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Link href='/products'>Link to Product Page</Link>
            <Button
                value='Click to open modal'
                onClick={() => setShowModal(true)}
            />

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>sdfjlskdfkls</Modal>
            )}
        </div>
    );
}
