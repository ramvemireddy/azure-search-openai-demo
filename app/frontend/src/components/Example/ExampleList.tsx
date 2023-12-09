import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is NJTA?",
        value: "What is included in my Northwind Health Plus plan that is not in standard?"
    },
    { text: "What are role and responsibilities of Software Development manager for NJTA proposal?", value: "Role and responsibilities of Software Development manager" },
    { text: "What does a Scrum Master do?", value: "Role and responsibilities of a scrum master?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
