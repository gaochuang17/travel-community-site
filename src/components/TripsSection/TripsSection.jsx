import React from "react";
import { Users, ChevronRight } from "lucide-react";
import styles from "./TripsSection.module.css";

export function TripsSection({ trips }) {
  return (
    <div className={styles.sideSection} id="groups">
      <h3>同伴招募</h3>
      {trips.map((trip) => (
        <button className={styles.tripLink} key={trip}>
          <Users size={16} />
          <span>{trip}</span>
          <ChevronRight size={15} />
        </button>
      ))}
    </div>
  );
}
