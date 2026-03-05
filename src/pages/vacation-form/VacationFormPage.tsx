import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./VacationFormPage.module.css";
import { useVacationStore } from "../../entities/vacation/model/store.ts";
import { fetchResorts, fetchPrograms } from "../../shared/api/mockApi.ts";

const countries = ["Италия", "Греция", "Таиланд"];

export default function VacationFormPage() {
  const navigate = useNavigate();

  const {
    name,
    country,
    resort,
    program,
    setName,
    setCountry,
    setResort,
    setProgram,
  } = useVacationStore();

  const [resorts, setResorts] = useState<string[]>([]);
  const [programs, setPrograms] = useState<string[]>([]);
  const [loadingResorts, setLoadingResorts] = useState(false);
  const [loadingPrograms, setLoadingPrograms] = useState(false);

  useEffect(() => {
    if (!country) {
      setResorts([]);
      return;
    }

    const loadResorts = async () => {
      setLoadingResorts(true);
      const data = await fetchResorts(country);
      setResorts(data);
      setLoadingResorts(false);
    };

    loadResorts();
  }, [country]);

  useEffect(() => {
    if (!resort) {
      setPrograms([]);
      return;
    }

    const loadPrograms = async () => {
      setLoadingPrograms(true);
      const data = await fetchPrograms(resort);
      setPrograms(data);
      setLoadingPrograms(false);
    };

    loadPrograms();
  }, [resort]);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    navigate("/vacation-plan");
  };

  const isValid =
    name.trim().length > 0 &&
    country.length > 0 &&
    resort.length > 0 &&
    program.length > 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Планирование отпуска</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Имя путешественника</label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Страна</label>
          <select
            className={styles.select}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Выберите страну</option>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Курорт / город</label>
          <select
            className={styles.select}
            value={resort}
            onChange={(e) => setResort(e.target.value)}
            disabled={!country || loadingResorts}
          >
            <option value="">
              {loadingResorts ? "Загрузка..." : "Выберите курорт"}
            </option>

            {resorts.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Программа отдыха</label>
          <select
            className={styles.select}
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            disabled={!resort || loadingPrograms}
          >
            <option value="">
              {loadingPrograms ? "Загрузка..." : "Выберите программу"}
            </option>

            {programs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <button
          className={styles.button}
          disabled={!isValid}
          type="submit"
        >
          Запланировать отпуск
        </button>
      </form>
    </div>
  );
}