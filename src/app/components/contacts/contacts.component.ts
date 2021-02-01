import { ContactService } from './../../services/contact.service';
import { Contact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact:Contact = {
    nom: "",
    email:"",
    message:"",
  }

  constructor(private  contactService:ContactService) { }

  ngOnInit(): void {
  }
addMessage() {
    this.contactService.addCours(this.contact)
  }

}
