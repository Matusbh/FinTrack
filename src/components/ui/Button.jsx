// Botón reutilizable en toda la app. Recibe el texto, el estilo (primario, secundario, peligro) y una función onClick.

export default function Button({ text, style = "primary", onClick }) {
  const styles = {
    primary: "bg-[#16A34A] hover:bg-[#15803D] text-white",
    secondary: "bg-[#EAEAEA] hover:bg-[#D4D4D4] text-[#1A1A1A]",
    danger: "bg-[#DC2626] hover:bg-[#B91C1C] text-white",
  };

  return (
    <button className={styles[style]} onClick={onClick}>
      {text}
    </button>
  );
}
