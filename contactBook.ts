interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

let contacts: Contact[] = [];

// Function 1 Add Contact:

function addContact(contact: Contact): void {
  contacts.push(contact);
  console.log(`contact added: ${contact.name}`);
}

// Function 2 List Contacts:

function listContacts(): void {
  console.log("\nContact List:");

  if (contacts.length === 0) {
    console.log("No contacts found.");
    return;
  }

  contacts.forEach(contact => {
    console.log(
      `ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email ?? "N/A"}, Phone: ${contact.phone ?? "N/A"}`
    );
  });
}
