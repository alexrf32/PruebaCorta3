import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../_services/member.service';
import { Member } from '../../_interfaces/member';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  member: Member = {
    id: undefined,
    name: '',
    email: '',
    semester: '',
    career: ''
  };
  mensaje: string = '';

  constructor(private memberService: MemberService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const memberId = this.route.snapshot.params['id'];
    this.memberService.getMemberById(memberId).subscribe({
      next: (member) => {
        this.member = member;
      },
      error: (error) => {
        this.mensaje = 'Error al cargar el integrante';
      }
    });
  }

  editarIntegrante() {
    if (this.member.id) {
      this.memberService.updateMember(this.member.id, this.member).subscribe({
        next: (response) => {
          this.mensaje = 'Integrante editado exitosamente';
          this.router.navigate(['/members']);
        },
        error: (error) => {
          this.mensaje = 'Error al editar el integrante';
        }
      });
    }
  }
}
