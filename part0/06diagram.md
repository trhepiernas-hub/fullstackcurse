```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant S as Server
    U->>B: Writes note in text field
    U->>B: Clicks "Save" button
    B->>S: HTTP POST /new_note {note}
    S->>S: Processes and saves the note
    S->>B: HTTP Response (Redirect to /notes)
    B->>U: Displays updated notes page
