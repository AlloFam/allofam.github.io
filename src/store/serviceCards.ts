//  Icons
import doctorImg from "../assets/icons/doctor.png";
import chatImg from "../assets/icons/chat.png";
import oralHealthImg from "../assets/icons/oral-health.png";
import physiotherapistImg from "../assets/icons/physiotherapist.png";
import speechTherapistImg from "../assets/icons/speech-therapist.png";

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
