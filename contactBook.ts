interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

let contacts: Contact[] = [];

// Function 1 Add Contact:

function addContact(contact: Contact) {
  contacts.push(contact);
  console.log(`contact added: ${contact.name}`);
}

// Function 2 List Contacts:

function listContacts() {
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

// Function 3 Find by name:-

function findByName(name: string): Contact[] {
  const matches = contacts.filter(contact =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );

  console.log(`Found ${matches.length} contact(s) matching "${name}".`);
  return matches;
}


// Function 4 Remove by Id:-

function removeById(id: number): boolean {
  const originalLength = contacts.length;

  contacts = contacts.filter(contact => contact.id !== id);

  if (contacts.length < originalLength) {
    console.log(`Contact with ID ${id} removed.`);
    return true;
  }

  console.log(`No contact found with ID ${id}.`);
  return false;
}

// Testing code:-

addContact({ id: 1, name: "Priti Saxena", email: "priti@example.com", phone: "123-456-7890" });
addContact({ id: 2, name: "Sunil Srivastav", email: "sunil@example.com", phone: "234-567-8901" });
addContact({ id: 3, name: "Harshad Patel", phone: "345-678-9012" });

listContacts();
findByName("sunil");
removeById(2);
listContacts();






