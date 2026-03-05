import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from './VacationPlanPage.module.css'
import { useVacationStore } from "../../entities/vacation/model/store";

export default function VacationPlanPage() {
  const navigate = useNavigate();

  const { name, country, resort, program, reset } = useVacationStore();

  useEffect(() => {
    if (!name || !country || !resort || !program) {
      navigate("/");
    }
  }, [name, country, resort, program, navigate]);

  const handleNewPlan = () => {
    reset();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ваш план отпуска</h1>

      <div className={styles.card}>
        <div className={styles.row}>
          <strong className={styles.label}>Имя путешественника</strong>
          <span>{name}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Страна</span>
          <span>{country}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Курорт</span>
          <span>{resort}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Программа отдыха</span>
          <span>{program}</span>
        </div>
      </div>

      <button className={styles.button} onClick={handleNewPlan}>
        Создать новый план
      </button>
    </div>
  );
}