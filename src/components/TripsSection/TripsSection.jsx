/**
 * 左侧同伴招募区块：标题链到 /groups，每条招募链到对应详情页。
 */
import React from "react";
import { Link } from "react-router-dom";
import { Users, ChevronRight } from "lucide-react";
import { getTripSlug } from "../../utils/slug";
import styles from "./TripsSection.module.less";

export function TripsSection({ trips }) {
  return (
    <div className={styles.sideSection}>
      <h3>
        <Link className={styles.sectionLink} to="/groups">
          同伴招募
        </Link>
      </h3>
      {trips.map((trip) => (
        <Link className={styles.tripLink} key={trip} to={`/groups/${getTripSlug(trip)}`}>
          <Users size={16} />
          <span>{trip}</span>
          <ChevronRight size={15} />
        </Link>
      ))}
    </div>
  );
}
