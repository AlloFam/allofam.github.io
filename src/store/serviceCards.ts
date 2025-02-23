//  Icons
import physiotherapistImg from "../assets/icons/services/physiotherapist.png";
import oralHealthImg from "../assets/icons/services/dentist.png";
import speechTherapistImg from "../assets/icons/services/occupational.png";
import chatImg from "../assets/icons/services/speech.png";
import doctorImg from "../assets/icons/services/pediatricians.png";

interface ServiceCardProps {
  title: string;
  src: string;
}

export const serviceCards: ServiceCardProps[] = [
  {
    title: "Physical Therapists",
    src: physiotherapistImg,
  },
  {
    title: "Pediatric Dentists ",
    src: oralHealthImg,
  },
  {
    title: "Occupational Therapists",
    src: speechTherapistImg,
  },
  {
    title: "Speech Therapist",
    src: chatImg,
  },
  {
    title: "Pediatricians",
    src: doctorImg,
  },
];
