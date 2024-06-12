interface Buttonprops {
  children: React.ReactNode;
  targetId: string;
  onClick?: () => void;
}

const CopyJSONButton: React.FC<Buttonprops> = ({children, targetId, onClick}) => {
  return (
    <>
      <button
        className='btn btn-primary'
        id='copyJSON'
        data-clipboard-action='copy'
        data-clipboard-target={targetId}
        onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default CopyJSONButton;
