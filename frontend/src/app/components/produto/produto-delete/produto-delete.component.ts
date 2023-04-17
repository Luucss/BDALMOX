import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit{

  produto!: Produto;

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.readById(id!).subscribe(produto => {
      this.produto = produto;
    });
  }

  deleteProduto(): void {
    this.produtoService.delete(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto Deletado')
      this.router.navigate(["/produtos"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

}
