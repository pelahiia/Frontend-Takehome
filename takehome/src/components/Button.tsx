type Props = {
  handleSubmit: () => void,
}

export const Button: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <button 
      className="button"
      onClick={handleSubmit}
    >
      Submit
    </button>
  )
}