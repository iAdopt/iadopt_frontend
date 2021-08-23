// import styles from './Style.module.scss';
import { VisualFilter } from "../Filters/FilterVisual";
import { useState, useEffect } from "react";
import { AnimalsV01 } from "../Animals/AnimalsV01";
import { AnimalsV02 } from "../Animals/AnimalsV02";


export const SectionAnimalsView = () => {
  /* FILTER'S VIEW STATE */
  const [stateVisual, setStateVisual] = useState({ v01: true, v02: false });

  return (
    <section>
      <VisualFilter stateVisual={stateVisual} setStateVisual={setStateVisual} />
      <div style={styles.section}>
        {stateVisual.v01 ? (
            <AnimalsV01 />
        ) : (
            <AnimalsV02 />
        )}
      </div>
    </section>
  );
};

const styles = {
  section: {
    margin: "20px 42px",
  },
};
