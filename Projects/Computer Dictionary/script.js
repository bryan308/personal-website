function find() {
	var term = document.getElementById("search").value;
	if (term == "CPU") {
	  document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CPU\')" class="definition-link">Central Processing Unit</a>';
	}
	else if (term == "RAM") {
	  document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'RAM\')" class="definition-link">Random Access Memory</a>';
	}
	else if (term == "ROM") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'ROM\')" class="definition-link">Read-only Memory</a>';
	}
	else if (term == "GPU") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'GPU\')" class="definition-link">Graphics Processing Unit</a>';
	}
	else if (term == "HDD") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'HDD\')" class="definition-link">Hard Disk Drive</a>';
	}
	else if (term == "SSD") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'SSD\')" class="definition-link">Solid State Drive</a>';
	}
	else if (term == "USB") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'USB\')" class="definition-link">Universal Serial Bus</a>';
	}
	else if (term == "LAN") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'LAN\')" class="definition-link">Local Area Network</a>';
	}
	else if (term == "WAN") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'WAN\')" class="definition-link">Wide Area Network</a>';
	}
	else if (term == "VPN") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'VPN\')" class="definition-link">Virtual Private Network</a>';
	}
	else if (term == "HTTP") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'HTTP\')" class="definition-link">Hypertext Transfer Protocol</a>';
	}
	else if (term == "HTTPS") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'HTTPS\')" class="definition-link">HTTP Secure</a>';
	}
	else if (term == "FTP") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'FTP\')" class="definition-link">File Transfer Protocol</a>';
	}
	else if (term == "SFTP") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'SFTP\')" class="definition-link">Secure File Transfer Protocol</a>';
	}
	else if (term == "DNS") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'DNS\')" class="definition-link">Domain Name System</a>';
	}
	else if (term == "IP") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'IP\')" class="definition-link">Internet Protocol</a>';
	}
	else if (term == "TCP") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'TCP\')" class="definition-link">Transmission Control Protocol</a>';
	}
	else if (term == "UDP") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'UDP\')" class="definition-link">User Datagram Protocol</a>';
	}
	else if (term == "SMS") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'SMS\')" class="definition-link">Short Message Service</a>';
	}
	else if (term == "MMS") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'MMS\')" class="definition-link">Multimedia Messaging Service</a>';
	}
	else if (term == "HTML") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'HTML\')" class="definition-link">Hypertext Markup Language</a>';
	}
	else if (term == "XML") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'XML\')" class="definition-link">eXtensible Markup Language</a>';
	}
	else if (term == "CSS") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CSS\')" class="definition-link">Cascading Style Sheets</a>';
	}
	else if (term == "JS") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'JS\')" class="definition-link">JavaScript</a>';
	}
	else if (term == "SQL") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'SQL\')" class="definition-link">Structured Query Language</a>';
	}
	else if (term == "API") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'API\')" class="definition-link">Application Programming Interface</a>';
	}
	else if (term == "GUI") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'GUI\')" class="definition-link">Graphical Use Interface</a>';
	}
	else if (term == "CLI") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CLI\')" class="definition-link">Command Line Interface</a>';
	}
	else if (term == "CAD") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CAD\')" class="definition-link">Computer-Aided Design</a>';
	}
	else if (term == "CAM") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CAM\')" class="definition-link">Computer-Aided Manufacturing</a>';
	}
	else if (term == "CRM") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CRM\')" class="definition-link">Costumer Relationship Management</a>';
	}
	else if (term == "AGP") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'AGP\')" class="definition-link">Accelerated Graphics Port</a>';
	}
	else if (term == "BIOS") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'BIOS\')" class="definition-link">Basic Input-Output Services</a>';
	}
	else if (term == "CD") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CD\')" class="definition-link">Compact Disc</a>';
	}
	else if (term == "CD-R") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CD-R\')" class="definition-link">Compact Disc Recordable</a>';
	}
	else if (term == "CD-ROM") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CD-ROM\')" class="definition-link">Compact Disc Read-Only Memory</a>';
	}
	else if (term == "CD-RW") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'CD-RW\')" class="definition-link">Compact Disc Re-Writable</a>';
	}
	else if (term == "DRAM") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'DRAM\')" class="definition-link">Dynamic Random Access Memory</a>';
	}
	else if (term == "DV") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'DV\')" class="definition-link">Digital Video</a>';
	}
	else if (term == "DVD") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'DVD\')" class="definition-link">Digital Versatile Disc</a>';
	}
	else if (term == "DVD+R") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'DVD+R\')" class="definition-link">Digital Versatile Disc Recordable</a>';
	}
	else if (term == "DVD+RW") {
		document.getElementById("acronym").innerHTML= 'Abbreviation: <a href="#" onclick="displayDefinition(\'DVD+RW\')" class="definition-link">Digital Versatile Disk Rewritable</a>';
	}
	else {
	    document.getElementById("acronym").innerHTML = 'Abbreviation: <a href="#" onclick="sendMessage()" class="error">Sorry No acronym found or maybe it is in lowercase form.</a>';
	    // Clears the value of definition
	    document.getElementById("definition").innerHTML = "";
	}
}

function displayDefinition(acronym) {
	if (acronym == "CPU") {
	  document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: The Central Processing Unit is the brain of the computer. It retrieves instructions from memory and executes them.</div>';
	}
	else if (acronym == "RAM") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: Random Access Memory is a type of computer memory that can be accessed randomly, meaning that any byte of memory can be accessed without touching the preceding bytes.</div>';
	}
	else if (acronym == "ROM") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: Read-only Memory is a type of computer storage containing non-volatile, permanent data that, normally, can only be read, not written to.</div>';
	}
	else if (acronym == "GPU") {
	  document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A Graphics Processing Unit is a specialized processor designed to handle the complex calculations needed for computer graphics.</div>';
	}
	else if (acronym == "HDD") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: An HDD is a data storage device that uses magnetic disks to store and retrieve digital information.</div>';
	}
	else if (acronym == "SSD") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: An SSD is a data storage device that uses solid-state memory to store and retrieve digital information.</div>';
	}
	else if (acronym == "USB") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: USB is a standard that allows computers to communicate with external devices such as printers, keyboards, and mice.</div>';
	}
	else if (acronym == "LAN") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a computer network that connects devices in a limited geographical area such as a home, school, or office building.</div>';
	}
	else if (acronym == "WAN") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a computer network that spans a large geographical area, such as across cities or even countries.</div>';
	}
	else if (acronym == "VPN") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a private network that is created over a public network, such as the internet. It enables users to send and receive data across shared or public networks as if their devices were directly connected to the private network.</div>';
	}
	else if (acronym == "HTTP") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a set of rules for transferring files (such as HTML documents, images, and videos) on the World Wide Web.</div>';
	}
	else if (acronym == "HTTPS") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a secure version of HTTP that encrypts data sent between a web server and a client.</div>';
	}
	else if (acronym == "FTP") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a standard network protocol used to transfer files from one host to another over a TCP-based network, such as the internet.</div>';
	}
	else if (acronym == "SFTP") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed as an extension of the Secure Shell (SSH) protocol.</div>';
	}
	else if (acronym == "DNS") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a hierarchical decentralized naming system for computers, services, or other resources connected to the internet or a private network. It translates human-readable domain names into numerical IP addresses.</div>';
	}
	else if (acronym == "IP") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: An IP address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.</div>';
	}
	else if (acronym == "TCP") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a set of rules for transmitting data over the internet. It divides the data into small packets and sends them separately, reassembling them at the destination.</div>';
	}
	else if (acronym == "UDP") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a connectionless protocol that allows data to be transmitted over a network without establishing a connection.</div>';
	}
	else if (acronym == "SMS") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a text messaging service component of most telephone, internet, and mobile-device systems. It uses standardized communication protocols to allow fixed line or mobile phone devices to exchange short text messages.</div>';
	}
	else if (acronym == "MMS") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a standard way to send messages that include multimedia content to and from mobile phones.</div>';
	}
	else if (acronym == "HTML") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.</div>';
	}
	else if (acronym == "XML") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.</div>';
	}
	else if (acronym == "CSS") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a style sheet language used for describing the look and formatting of a document written in HTML.</div>';
	}
	else if (acronym == "JS") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: JavaScript is a programming language that is commonly used in web development to add interactivity to websites. It is a client-side scripting language, which means that it is executed by the user\'s web browser rather than on the server. JavaScript is often used to create responsive and dynamic websites and applications.</div>';
	}
	else if (acronym == "SQL") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a programming language used to manage and manipulate data stored in relational database management systems.</div>';
	}
	else if (acronym == "API") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a set of protocols, routines, and tools for building software and applications. It specifies how software components should interact and is used to build and integrate software systems.</div>';
	}
	else if (acronym == "GUI") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a type of user interface that allows users to interact with electronic devices through visual indicators such as windows, icons, and buttons.</div>';
	}
	else if (acronym == "CLI") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is a user interface that allows users to interact with electronic devices using commands entered through a command line or terminal.</div>';
	}
	else if (acronym == "CAD") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is the use of computer systems to assist in the creation, modification, analysis, or optimization of a design.</div>';
	}
	else if (acronym == "CAM") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is the use of computer systems to plan, coordinate, and control the operations of a manufacturing plant.</div>';
	}
	else if (acronym == "CRM") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: is the practice of managing and organizing customer interactions and data throughout the customer lifecycle, with the goal of improving customer relationships and business outcomes.</div>';
	}
	else if (acronym == "AGP") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A type of video interface introduced in 1996 as an improvement to PCI. It has now been largely replaced by PCI-e.</div>';
	}
	else if (acronym == "BIOS") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: This information is stored on a chip commonly referred to as the CMOS chip, which really isn\'t a CMOS chip at all. Usually it\'s a Flash-ROM chip. But they used to be CMOS chips back in the old days, and the name stuck. By whatever name, the BIOS contains the most basic information needed by the computer at the hardware level to let it know that it\'s a computer (rather than, for example, a toaster), how to boot up, and how to find the rest of its parts.</div>';
	}
	else if (acronym == "CD") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A type of optical media, so-called because it uses light to read the data stored on the disk.</d>';
	}
	else if (acronym == "CD-R") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A CD that can be recorded, but from which data cannot be deleted, so the space cannot be re-used. You can record on a CD-R multiple times, but the remaining space will be reduced by whatever\'s already occupying space on the disk.</div>';
	}
	else if (acronym == "CD-ROM") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: Basically the same as any other CD, except referring specifically to a disk that contains computer data rather than music.</div>';
	}
	else if (acronym == "CD-RW") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A CD that can be recorded multiple times, and from which data can be deleted and the space re-used.</div>';
	}
	else if (acronym == "DRAM") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A type of RAM that stores each bit of data on separate capacitors.</div>';
	}
	else if (acronym == "DV") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A protocol for the storage and transfer of audio-visual information, often used to transfer information from a camcorder to a computer, usually over a Firewire interface.</div>';
	}
	else if (acronym == "DVD") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A type of optical media that allows far more storage than a CD.</div>';
	}
	else if (acronym == "DVD+R") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A type of DVD that can be recorded, but from which information cannot be deleted and the space it occupied re-used.</d>';
	}
	else if (acronym == "DVD+RW") {
		document.getElementById("definition").innerHTML = '<div class="definition-content">Definition: A DVD that can be recorded, and from which information can be deleted and the space it occupied re-used.</div>';
	}
}

function reset() {
	// Clears the Value of Search bar
	document.getElementById("search").value = "";
	// Clears the value of definition
	document.getElementById("definition").innerHTML = "";
	// Clears the value of output Acronym
	document.getElementById("acronym").innerHTML = "Abbreviation:";
}

var alertBoxVisible = false;
function sendMessage() {
    if(alertBoxVisible) return;

    var alertBox = document.createElement("div");
    alertBox.className = "alert";
    var message = document.createTextNode("There's no Acronym appeared.");
    alertBox.appendChild(message);
    var closeButton = document.createElement("span");
    closeButton.className = "closebtn";
    closeButton.innerHTML = "&times;";
    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
    alertBox.style.opacity = "1";
    alertBoxVisible = true;

    closeButton.onclick = function() {
        alertBox.parentNode.removeChild(alertBox);
        alertBoxVisible = false;
    }
}

// Event listener on Search Icon 
document.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
    var searchButton = document.querySelector('.search-button');
    find();
  }
});
// event listener on Reset Icon
document.addEventListener('keyup', function(event) {
    if (event.code === 'Delete') {
    var resetButton = document.querySelector('.reset-button');
    reset();
	// Clears the value of definition
	document.getElementById("definition").innerHTML = "";
  }
});
// Event Listener on Search Bar
let firstSlashPress = true;
document.addEventListener("keydown", function(event) {
    if (event.code === "Slash") {
        if (firstSlashPress) {
            event.preventDefault();
            document.getElementById("search").focus();
            firstSlashPress = false;
        } else {
            firstSlashPress = true;
        }
    }
});

