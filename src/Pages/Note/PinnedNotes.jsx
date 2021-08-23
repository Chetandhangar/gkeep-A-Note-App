export const PinnedNotes = ({pinnedNotes}) => {
    return(
        <div>
            <div>
                {pinnedNotes.length <= 0 ? (
                    <div></div>
                ):
                <div>
                <h1>Pinned Notes</h1>
                    <div>
                        {pinnedNotes.map((note) => (
                            <div key={note.id}>
                            <div>{note.title}</div>
                                <div>{note.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}