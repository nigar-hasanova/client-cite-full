import { useState } from "react";
import styles from "./faq.module.css";
import { faqData } from "../../../data/faqData";

export default function Faq() {
    const [activeId, setActiveId] = useState<number | null>(1);

    const toggleItem = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <div className={styles.faq}>
            {faqData.map((item, index) => (
                <div key={item.id} className={styles.item}>
                    <div
                        className={styles.header}
                        onClick={() => toggleItem(item.id)}
                    >
                        <span className={styles.number}>
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className={styles.question}>{item.question}</h3>

                        <span className={styles.icon}>
                            {activeId === item.id ? "×" : "+"}
                        </span>
                    </div>

                    {activeId === item.id && (
                        <div className={styles.body}>
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}