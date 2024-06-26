import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../../_services/member.service';
import { CreateMember } from '../../_interfaces/create-member';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  member: CreateMember = {
    name: '',
    email: '',
    semester: '',
    career: ''
  };
  mensaje: string = '';

  constructor(private memberService: MemberService, private router: Router) {}

  agregarIntegrante() {
    this.memberService.createMember(this.member).subscribe({
      next: (response) => {
        this.mensaje = 'Integrante agregado exitosamente';
        this.router.navigate(['/members']);
      },
      error: (error) => {
        this.mensaje = 'Error al agregar el integrante';
      }
    });
  }
}
