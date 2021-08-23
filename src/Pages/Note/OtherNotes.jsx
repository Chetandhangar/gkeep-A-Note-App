export const OtherNots = ({otherNotes}) => {
    return(
        <div>
             <div>
                {otherNotes.length <= 0 ? (
                    <div></div>
                  ) : 
                  <div>
                  <h1>Other Notes</h1>
                  <div>
                  {otherNotes.map((note) => (
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