export default function NewToDoModal({ modalOpen }: { modalOpen: boolean }) {
  return (
    <div>
      {modalOpen && (
        <div className="modal">
          <h1>Hello!</h1>
        </div>
      )}
    </div>
  );
}
