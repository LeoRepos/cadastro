package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "LEO")
public class Cadastro {
	
	private String nome; 
	@Id
	private String cpf; 
	private Long tipoCliente; 
	private String sexo;
	private Long situacaoCliente;
	
	public Cadastro() {
		
	}
	
	public Cadastro(String nome, String cpf, Long tipoCliente, String sexo, Long situacaoCliente) {
		this.nome = nome; 
		this.cpf = cpf; 
		this.tipoCliente = tipoCliente;
		this.sexo = sexo;
		this.situacaoCliente = situacaoCliente;	
		
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Long getTipoCliente() {
		return tipoCliente;
	}

	public void setTipoCliente(Long tipoCliente) {
		this.tipoCliente = tipoCliente;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Long getSituacaoCliente() {
		return situacaoCliente;
	}

	public void setSituacaoCliente(Long situacaoCliente) {
		this.situacaoCliente = situacaoCliente;
	}
	
}
