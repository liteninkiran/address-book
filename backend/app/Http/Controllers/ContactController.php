<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function getContacts() {
        return new ContactCollection(Contact::all());
    }
}
