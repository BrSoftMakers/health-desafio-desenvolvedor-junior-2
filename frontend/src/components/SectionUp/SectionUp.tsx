import styles from "./SectionUp.module.css";
import { FaPlus, FaRegCalendarAlt } from "react-icons/fa";
import dateCalculator from "../../helpers/date"
import { useState } from "react";
import PetModal from "../PetModal/PetModal";

const SectionUp = () => {
    const [addingPet, setAddingPet] = useState(false);

    const handleAddButton = () => {
        setAddingPet(true);
    }

    const clickForCancel = () => {
        setAddingPet(false);
    }

    return (
        <>
        {addingPet && <PetModal operation="create" pressCancelBtn={clickForCancel} /> }
        <div className={styles.sectionUp}>
            <div className={styles.date}>
                <div className={styles.calendar}>
                    <FaRegCalendarAlt size={'2em'}/>
                </div>
                <div className={styles.day}>{dateCalculator.day}</div>
                <div className={styles.month}>{dateCalculator.month}</div>
            </div>

            <div className={styles.newPetButton} onClick={() => handleAddButton()}>
                <div>Add Pet</div>
                <FaPlus className={styles.FaPlus} size={`1em`}/>
            </div>
        </div>
        </>
    );
}

export default SectionUp;